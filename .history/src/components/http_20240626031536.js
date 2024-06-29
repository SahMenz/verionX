export async function emailSubscribtion(emailSub){
    const response = await fetch("https://verionx-api.onrender.com/api/v1/users/register-mail-to-mail-list", {
        method: 'POST',
        body: emailSub,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('failed to post user email');
    }

    return resData.message;
}