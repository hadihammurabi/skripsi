let pegawai = [];

const getAll = () => {
  return pegawai;
};

const getById = (id) => {
  const found = pegawai.findIndex(p => p.id === id);

  if (found >= 0) {
    return pegawai[found];
  }

  return null;
};

const create = (input) => {
  input.id = pegawai.length + 1;
  pegawai.push(input);

  return input;
};

const edit = (id, input) => {
  const found = pegawai.findIndex(p => p.id === id);

  if (found < 0) {
    return null;
  }

  const p = pegawai[found];
  p.nama = input.nama || p.nama;
  p.departemen = input.departemen || p.departemen;
  p.jabatan = input.jabatan || p.jabatan;
  p.menjabat_dari = input.menjabat_dari || p.menjabat_dari;
  p.menjabat_sampai = input.menjabat_sampai || p.menjabat_sampai;
  pegawai[found] = p;

  return p;
};

const del = (id) => {
  const found = pegawai.findIndex(p => p.id === id);

  if (found >= 0) {
    pegawai.splice(found, 1);
    return true;
  }

  throw new Error('not found');
};

module.exports = {
  getAll,
  getById,
  create,
  edit,
  del,
};
