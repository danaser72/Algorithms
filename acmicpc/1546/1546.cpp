#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    int N, M = 0;
    int arr[1000] = { 0, };
    int score;
    double sum = 0;

    scanf("%d", &N);
    for (int i = 0; i < N; i++) {
        scanf("%d", &score);
        arr[i] = score;
        if (M < score) M = score;
    }

    for (int i = 0; i < N; i++) {
        sum += ((double)arr[i] / M * 100);
    }
    printf("%f", sum / N);

    return 0;
}