#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    int N, sum = 0;
    char str[101];

    scanf("%d%s", &N, str);
    for (int i = 0; i < N; i++) {
        sum += (str[i] - '0');
    }
    printf("%d", sum);

    return 0;
}