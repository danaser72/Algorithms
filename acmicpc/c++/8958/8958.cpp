#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    int T;
    int score = 0;
    int stack = 1;
    char data[80] = "";

    scanf("%d", &T);

    for (int i = 0; i < T; i++) {
        score = 0;
        stack = 1;
        scanf("%s", data);

        for (int j = 0; data[j] != '\0'; j++) {
            if (data[j] == 'O') {
                score += stack;
                stack++;
            }
            else {
                stack = 1;
            }
        }

        printf("%d\n", score);
    }

    return 0;
}