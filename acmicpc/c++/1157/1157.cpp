#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    char str[1000001];
    int alpha[26] = { 0, };
    int maxPos = 0;
    bool multiple = false;
    scanf("%s", str);

    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] >= 'a') {
            alpha[str[i] - 'a']++;
        }
        else {
            alpha[str[i] - 'A']++;
        }
    }

    for (int i = 1; i < 26; i++) {
        if (alpha[maxPos] < alpha[i]) {
            maxPos = i;
            multiple = false;
        }
        else if (alpha[maxPos] == alpha[i]) {
            multiple = true;
        }
    }

    if (multiple) printf("?");
    else printf("%c", 'A' + maxPos);

    return 0;
}