var num = [15, 20, 42, 30, 10, 5];

for (var i = 0; i < num.length; i++) {
    var nums = num[i]
    if (nums > 25) {
        break;
    }
    console.log(nums);
}