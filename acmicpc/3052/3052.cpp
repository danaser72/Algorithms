#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    int arr[42] = { 0, };
    int num;
    int count = 0;

    for (int i = 0; i < 10; i++) {
        scanf("%d", &num);
        if (arr[num % 42] == 0)
            count++;
        arr[num % 42] = 1;
    }
    printf("%d", count);

    return 0;
}