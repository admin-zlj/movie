export const formatTime = (dateTime, short = false) => {
    const newTime = new Date(dateTime * 1000);
    const year = newTime.getFullYear();
    const month = (newTime.getMonth() + 1).toString().padStart(2, '0');
    const day = newTime.getDate().toString().padStart(2, '0');
    const hours = newTime.getHours().toString().padStart(2, '0');
    const minutes = newTime.getMinutes().toString().padStart(2, '0');
    if (short) return `${year}-${month}-${day}`;
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const sleep = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

// 判断一个字符串是否为手机号码
export function isPhoneNumber(str) {
    const phoneRegex = /^1[3456789]\d{9}$/;
    return phoneRegex.test(str);
}
