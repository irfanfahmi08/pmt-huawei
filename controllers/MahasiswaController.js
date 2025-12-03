const { Mahasiswa } = require("../models")

const findAllMahasiswa = async (req, res) => {
  try {
    const data = await Mahasiswa.findAll()

    const result = {
      status: "ok",
      data: data
    }

    res.json(result)
  } catch (error) {
    console.error(error, '<<<< error find all books')
  }
};

const getMahasiswaById = async (req, res) => {
  try {
    const { id } = req.params

    const data = await Mahasiswa.findByPk(id)
    if (data === null ) {
      return res.status(404).json({
        status: "failed",
        message: `data with id ${id} not found`
      })
    }

    return res.json({
      status: "ok",
      data: data
    })
  } catch (error) {
    console.error(error, '<<<< error get mahasiswa by id')
  }
};

const createNewMahasiswa = async (req, res) => {
    try {
      const { nim, nama_lengkap, jurusan, alamat } = req.body

      const newMahasiswa = await Mahasiswa.create({
        nim: nim,
        namaLengkap: nama_lengkap,
        jurusan: jurusan,
        alamat: alamat
      })

      res.status(201).json({
        status: 'ok',
        message: 'new mahasiswa created',
        data: {
          id: newMahasiswa.id,
          nim: newMahasiswa.nim,
          nama_lengkap: newMahasiswa.namaLengkap,
          jurusan: newMahasiswa.jurusan,
          alamat: newMahasiswa.alamat
        }
      })
    } catch (error) {
      console.error(error, '<<<< error create new Mahasiswa')
    } 
}

module.exports = { findAllMahasiswa, getMahasiswaById, createNewMahasiswa };
