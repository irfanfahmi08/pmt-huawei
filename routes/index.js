const { findAllMahasiswa, getMahasiswaById, createNewMahasiswa } = require('../controllers/MahasiswaController')

const router = require('express').Router()

router.get('/mahasiswa', findAllMahasiswa)
router.get('/mahasiswa/:id', getMahasiswaById)
router.post('/mahasiswa', createNewMahasiswa)

module.exports = router