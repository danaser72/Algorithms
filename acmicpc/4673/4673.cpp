#define _CRT_SECURE_NO_WARNINGS

#include<stdio.h>

int SplitSum(int n) {
    if (n / 10 == 0)
        return n;
    else
        return n % 10 + SplitSum(n / 10);
}

int d(int n) {
    return n + SplitSum(n);
}

int main(void) {
    int arr[10001] = { 0, };

    for (int i = 1; i < 10001; i++) {
        if (arr[i] == 0) {
            int tmp = i;
            while (1) {
                tmp = d(tmp);
                if (tmp > 10000 || arr[tmp] != 0) break;
                arr[tmp] = 1;
            }
        }
    }

    for (int i = 1; i < 10001; i++) {
        if (arr[i] == 0) {
            printf("%d\n", i);
        }
    }

    return 0;
}