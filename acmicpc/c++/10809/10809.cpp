#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    char S[101];
    int alpha[26] = { 0, };

    scanf("%s", S);
    for (int i = 0; S[i] != '\0'; i++) {
        if (alpha[S[i] - 'a'] == 0) {
            alpha[S[i] - 'a'] = i + 1;
        }
    }

    for (int i = 0; i < 26; i++) {
        printf("%d ", alpha[i] - 1);
    }

    return 0;
}