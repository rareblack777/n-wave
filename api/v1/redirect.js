// api/v1/redirect.js

const links = {
    "01": "https://s.shopee.com.br/6VHnOzyGx4?share_channel_code=1",
    "02": "https://s.shopee.com.br/7AXUCUbbDc?share_channel_code=1",
    "03": "https://s.shopee.com.br/7AXUCZDeMn?share_channel_code=1",
    "04": "https://s.shopee.com.br/1Vt7SbAiFf?share_channel_code=1",
    "05": "https://s.shopee.com.br/8APZCWqEqR?share_channel_code=1",
    "06": "https://s.shopee.com.br/9UuwmDdkY1?share_channel_code=1",
    "07": "https://s.shopee.com.br/4q9ZMHz2yz?share_channel_code=1",
    "08": "https://s.shopee.com.br/8APaAcPR3z?share_channel_code=1",
    "09": "https://s.shopee.com.br/2qO3oqMvss?share_channel_code=1",
    "10": "https://s.shopee.com.br/2qO3pOiKLY?share_channel_code=1",
    "11": "https://s.shopee.com.br/9AI7NkORSl?share_channel_code=1",
    "12": "https://s.shopee.com.br/8V2Qadk9OP?share_channel_code=1",
    "13": "https://s.shopee.com.br/1BFps3yJaj?share_channel_code=1",
    "14": "https://s.shopee.com.br/806A7TY8yQ?share_channel_code=1",
    "15": "https://s.shopee.com.br/8pfH8DeGyz?share_channel_code=1",
    "16": "https://s.shopee.com.br/1qVWpgYoeJ?share_channel_code=1",
    "17": "https://s.shopee.com.br/AAAel22DOg?share_channel_code=1",
    "18": "https://s.shopee.com.br/9Uuxxpzc7l?share_channel_code=1",
    "19": "https://s.shopee.com.br/5Alynu22DY?share_channel_code=1",
    "20": "https://s.shopee.com.br/9UuxxtOjRR?share_channel_code=1",
    "21": "https://s.shopee.com.br/9pXobk2VdR?share_channel_code=1",
    "22": "https://s.shopee.com.br/5fiFe7dYuQ?share_channel_code=1",
    "23": "https://s.shopee.com.br/4q98edjvGy?share_channel_code=1",
    "24": "https://s.shopee.com.br/1BFqIfaA0l?share_channel_code=1",
    "25": "https://s.shopee.com.br/30hUUsYZgC?share_channel_code=1",
    "26": "https://s.shopee.com.br/AKU6TjDb3Z?share_channel_code=1",
    "27": "https://s.shopee.com.br/9KbZIJOV0N?share_channel_code=1",
    "28": "https://s.shopee.com.br/6VHNuro90k?share_channel_code=1"
};

export default function handler(req, res) {
    const { id } = req.query;
    const target = links[id];

    if (target) {
        // Redirecionamento 302 (Temporário): O navegador não guarda em cache,
        // garantindo que cada clique seja processado pela sua API.
        return res.redirect(302, target);
    }

    // Se o ID for inválido, volta para a home do site
    return res.redirect(302, '/');
}