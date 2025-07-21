#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    int arr[30] = { 0, };
    int num;

    for (int i = 0; i < 28; i++) {
        scanf("%d", &num);
        arr[num - 1] = 1;
    }

    for (int i = 0; i < 30; i++) {
        if (arr[i] == 0) {
            printf("%d\n", i + 1);
        }
    }

    return 0;
}