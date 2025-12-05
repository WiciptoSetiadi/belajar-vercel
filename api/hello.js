// api/hello.js
module.exports = (req, res) => {
  // Mengambil parameter nama dari URL, atau default "Teman"
  const { name = 'Teman' } = req.query;

  // Mengirim respon JSON
  res.status(200).json({
    pesan: `Halo, ${name}! Ini dari Serverless Vercel.`,
    waktu: new Date().toString()
  });
};