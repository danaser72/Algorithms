/*
    문제확인!
*/
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <vector>

long long sum(std::vector<int> &a);

int main(void) {
    int n;

    std::vector<int> a = { 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 };

    printf("%d", sum(a));

    return 0;
}

long long sum(std::vector<int> &a) {
    long long ans = 0;
    for (int i = 0; i < a.size() ; i++){
        ans += a[i];
    }
    return ans;
}