const removeDuplicates = (nums) => {
    let len = 0;
    if (nums.length === 0) {
        return len;
    }
    len++;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            len++;
        }
    }

    return len;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]), "how many");
