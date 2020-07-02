for i in range(int(input())):
    n = int(input())
    c = int(n**(1/3))
    if n%2==0 or c**3 == n :
        print("YES")
    else:
        print("NO")