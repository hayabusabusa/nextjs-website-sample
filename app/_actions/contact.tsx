"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
    // `form` の `name` 属性ごとに `formData.get()` で値を取り出す.
    const rawFormData = {
        lastname: formData.get("lastname") as string,
        firstname: formData.get("firstname") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormData.lastname) {
        return {
            status: 400,
            message: "姓を入力してください",
        };
    }
    if (!rawFormData.firstname) {
        return {
            status: 400,
            message: "名を入力してください",
        };
    }
    if (!rawFormData.company) {
        return {
            status: 400,
            message: "会社名を入力してください",
        };
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: 400,
            message: "メールアドレスの形式が間違っています",
        };
    }
    if (!rawFormData.message) {
        return {
            status: 400,
            message: "メッセージを入力してください",
        };
    }

    return {
        status: "success",
        message: "OK"
    };
}