const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;
//サーバーに通知
const header = {
    headers: {
        "Content-Type": "application/json"
    }
};

//非同期処理
export const get = async (path) => {
    const resp = await fetch(url(path));
    checkError(resp.status);
    const result = await resp.json();

    return result;
};

export const post = async (path, body) => {
    //jsonで送っている
    const options = { ...header, method: "POST", body: JSON.stringify(body) };
    const resp = await fetch(url(path), options);
    checkError(resp.status);
    const result = await resp.json();

    return result
};

export const deleteRequest = async (path) => {
    const options = { method: "DELETE" };
    const resp = await fetch(url(path), options);
    checkError(resp.status);

    // 204 No Contentが返ってくるので成功の場合は何もreturnしない
    return;
};

const checkError = (status) => {
    // 今回は400以上の場合は全部まとめてエラーとして処理
    if (status >= 400) {
        throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
    }
};