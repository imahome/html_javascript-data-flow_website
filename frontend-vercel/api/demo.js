
export default function handler(request, response) {
    console.log(`request body: `, request.body);
    const postcode = JSON.parse(request.body).postcode;
    console.log(`postcode: `, postcode);
    const reversedText = postcode.split(``).toReversed().join(``);
    return response.status(200).json({ text: reversedText });
}
