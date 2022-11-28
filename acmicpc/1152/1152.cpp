/*
    fgets
*/

#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    bool isBeforeWord = false;
    int cnt = 0;
    char str[1000001];
    fgets(str, sizeof(str), stdin);

    for (int i = 0; str[i] != '\0' && str[i] != '\n'; i++) {
        if (isBeforeWord) {
            if (str[i] == ' ') {
                cnt++;
                isBeforeWord = false;
            }
        }
        else {
            if (str[i] != ' ') {
                isBeforeWord = true;
            }
        }
    }
    if (isBeforeWord) cnt++;

    printf("%d", cnt);

    return 0;
}