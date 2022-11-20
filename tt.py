
def smart_divide(func):
    def inner(a,b):
        print("i am going to divide", a, 'and', b)
        if b ==0:
            print("cannot divide")
        return func(a,b)
    return inner 

@smart_divide
def divide(a,b):
    return (a/b)

new= divide(1,2)
print(new)

