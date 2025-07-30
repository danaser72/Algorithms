const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const matter = require("gray-matter");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// 노션 페이지 목록 조회
async function fetchAllPages() {
  const pages = [];
  let cursor;

  while(true) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    });
    pages.push(...response.results);
    if(!response.has_more) break;
    cursor = response.next_cursor;
  }
  return pages;
}

// 노션 페이지 데이터 조회
async function getPageContent(pageId) {
  const blocks = [];
  let cursor;
  while(true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    blocks.push(...response.results);
    if (!response.has_more) break;
    cursor = response.next_cursor;
  }
  return blocks.map(block => block[block.type]?.text?.[0]?.plain_text || "").join("\n");
}

(async () => {
  const pages = await fetchAllPages();
  const outputDir = "Notion/study";

  for (const page of pages) {
    const props = page.properties;
    const pageTitle = props.Name?.title?.[0]?.plain_text || "제목없음";
    const slugTitle = slugify(pageTitle);
    const filePath = path.join(outputDir, `${slugTitle}.jd`);

    const content = await getPageContent(page.id);

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, matter.stringify(content, {
      title: pageTitle,
      notion_id: page.id,
    }));
  }
})();
