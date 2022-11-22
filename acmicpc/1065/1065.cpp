#define _CRT_SECURE_NO_WARNINGS

#include<stdio.h>

int main(void) {
    int N, count = 0;
    int arr[1001] = { 0, };

    scanf("%d", &N);
    for (int i = 1; i <= N; i++) {
        if (arr[i] == 0) {
            if (i < 10) {
                arr[i] = 1;
                count++;

                for (int j = -9; j < 9; j++) {
                    int tmp = i;
                    int add = (i % 10) + j;
                    while (add >= 0 && add < 10) {
                        tmp = tmp * 10 + add;
                        add = (tmp % 10) + j;
                        if (tmp <= 0 || tmp > N || arr[tmp] != 0) break;
                        arr[tmp] = 1;
                        count++;
                    }
                }
            }
        }
    }

    printf("%d\n", count);

    return 0;
}