#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int main(void) {
    bool winB = false;
    char A[4], B[4];

    scanf("%s %s", A, B);

    for (int i = 2; i >= 0; i--) {
        if (A[i] > B[i]) {
            break;
        }
        else if (A[i] < B[i]) {
            winB = true;
            break;
        }
    }

    for (int i = 2; i >= 0; i--) {
        if (winB) {
            printf("%c", B[i]);
        }
        else {
            printf("%c", A[i]);
        }
    }

    return 0;
}