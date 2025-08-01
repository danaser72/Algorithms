const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");
const { NotionToMarkdown } = require("notion-to-md");
const matter = require("gray-matter");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;
const n2m = new NotionToMarkdown({ notionClient: notion })

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
    if (!response.has_more) break;
    cursor = response.next_cursor;
  }
  return pages;
}

// 노션 페이지 데이터 조회
async function getPageContent(pageId) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return (mdString.parent || "").split("\n").join("  \n");
}

(async () => {
  const pages = await fetchAllPages();
  const outputDir = "study";

  for (const page of pages) {
    const props = page.properties;
    const pageTitle = props["이름"]?.title?.[0]?.plain_text || "제목없음";
    const filePath = path.join(outputDir, `${pageTitle}.md`);

    const content = await getPageContent(page.id);

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, matter.stringify(content, {
      title: pageTitle,
      notion_id: page.id,
    }));
  }
})();
