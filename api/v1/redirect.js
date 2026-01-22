// api/v1/redirect.js
const links = {
    "01": "https://s.shopee.com.br/6VHnOzyGx4?share_channel_code=1",
    "02": "https://s.shopee.com.br/14JrDzggh?share_channel_code=1",
    "03": "https://s.shopee.com.br/7AXUCZDeMn?share_channel_code=1",
    "04": "https://s.shopee.com.br/1Vt7SbAiFf?share_channel_code=1",
    "05": "https://s.shopee.com.br/4VWjP8GtE7?share_channel_code=1",
    "06": "https://s.shopee.com.br/6KyNacBPhB?share_channel_code=1",
    "07": "https://s.shopee.com.br/2B8ocyiOz8?share_channel_code=1",
    "08": "https://s.shopee.com.br/3qH2c56BUp?share_channel_code=1",
    "09": "https://s.shopee.com.br/AKUWM3TQrw?share_channel_code=1",
    "10": "https://s.shopee.com.br/qdR2cKaRo?share_channel_code=1",
    "11": "https://s.shopee.com.br/50T00TZHVE?share_channel_code=1",
    "12": "https://s.shopee.com.br/7fTlBcA8KY?share_channel_code=1",
    "13": "https://s.shopee.com.br/6fbDzuAdko?share_channel_code=1",
    "14": "https://s.shopee.com.br/5AmQE0YbjJ?share_channel_code=1",
    "15": "https://s.shopee.com.br/9fEpaIQ0dF?share_channel_code=1",
    "16": "https://s.shopee.com.br/9fEpaJTnaM?share_channel_code=1",
    "17": "https://s.shopee.com.br/9fEpaawGba?share_channel_code=1",
    "18": "https://s.shopee.com.br/4fq9dupFEm?share_channel_code=1",
    "19": "https://s.shopee.com.br/1gCY4SqFZz?share_channel_code=1",
    "20": "https://s.shopee.com.br/60LXEpGr6A?share_channel_code=1",
    "21": "https://s.shopee.com.br/50T03D64Q8?share_channel_code=1",
    "22": "https://s.shopee.com.br/4Att3oS4vD?share_channel_code=1",
    "23": "https://s.shopee.com.br/14K6tyYZu?share_channel_code=1",
    "24": "https://s.shopee.com.br/7AXUeXzE2a?share_channel_code=1",
    "25": "https://s.shopee.com.br/6fbE3yEe2O?share_channel_code=1"
};

export default function handler(req, res) {
    const { id } = req.query;
    const target = links[id];

    if (target) {
        return res.redirect(302, target);
    }
    return res.redirect(302, '/');
}