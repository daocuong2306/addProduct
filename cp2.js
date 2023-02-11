// bài 1: cho n(năm). in ra thế kỉ của năm ý.(10đ)
// Bài 2: viết function thực hiện yêu cầu: cho 1 số nguyên dương n. tính tổng từ 1 đến n.
// Bài 3: viết function thực hiện yêu cầu sau: cho độ dài 3 cạnh của 1 tam giác. in ra đó là tam giác gì
// bài 4:  viết function : cho số n. tính giai thừa của n


function bai2(n) {
    sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}
bai2(3)

function bai3(ab, bc, ca) {
    let d =0;
    if(ab>bc) {
        d=ab;
        ab=bc;
        bc=d;
    }
    if(ca>bc) {
        d=ca;
        ca=bc;
        bc=d;
    }
    if (bc * bc == ab * ab + ca * ca) {
        console.log("đây là tam giác vuông");
    } else {
        console.log("tam giác thường");
    }
}
bai3(5,4,3);
// công thức tính giai thừa : !5 = 1*2*3*4*5
function bai4(n) {
    sum=1;
    for(let i=1;i<=n;i++) {
        sum*=i;
    }
    console.log(sum);
}
bai4(5)