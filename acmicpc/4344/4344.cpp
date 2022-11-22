#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <math.h>

int main(void) {
    int C, N, count;
    double sum;
    double arr[1000] = { 0, };

    scanf("%d", &C);
    for (int c = 0; c < C; c++) {
        sum = 0;
        count = 0;
        scanf("%d", &N);

        for (int i = 0; i < N; i++) {
            scanf("%lf", &arr[i]);
            sum += arr[i];
        }

        for (int i = 0; i < N; i++) {
            if (sum / N < arr[i]) count++;
        }

        printf("%.3f%%\n", round((double)count / N * 100 * 1000) / 1000);
    }

    return 0;
}