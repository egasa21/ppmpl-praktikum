const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');
describe('Pengujian Fungsi Matematika', function () {
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function () {
        expect(tambah(2, 2)).to.equal(4);
    });
    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function () {
        expect(kali(2, 3)).to.equal(6);
    });
    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function () {
        expect(kurang(2, 2)).to.equal(0);
    });
    it('seharusnya mengembalikan 2 saat membagi 6 / 3', function () {
        expect(bagi(6, 3)).to.equal(2);
    });

    it('seharusnya mengembalikan error saat membagi dengan 0', function () {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });
    it('seharusnya mengembalikan 0 saat membagi 0 dengan angka lain', function () {
        expect(bagi(0, 5)).to.equal(0);
    });
    it('seharusnya mengembalikan -2 saat membagi -6 dengan 3', function () {
        expect(bagi(-6, 3)).to.equal(-2);
    });
    it('seharusnya mengembalikan -2 saat membagi 6 dengan -3', function () {
        expect(bagi(6, -3)).to.equal(-2);
    });

    it('seharusnya mengembalikan -4 saat mengurangkan 2 - 6', function () {
        expect(kurang(2, 6)).to.equal(-4);
    });
    it('seharusnya mengembalikan 1 saat mengurangkan -2 - (-3)', function () {
        expect(kurang(-2, -3)).to.equal(1);
    });
    it('seharusnya mengembalikan error saat input string atau null', function () {
        expect(() => tambah("1", "2")).to.throw('Input tidak boleh bernilai string atau null');
    });
    it('seharusnya mengembalikan error saat input null dan angka', function () {
        expect(() => tambah(null, 2)).to.throw('Input tidak boleh bernilai string atau null');
    });
    it('seharusnya mengembalikan error saat input null dan angka dalam fungsi kali', function () {
        expect(() => kali(null, 2)).to.throw('Input tidak boleh bernilai string atau null');
    });
    it('seharusnya mengembalikan error saat input string dalam fungsi kali', function () {
        expect(() => kali("5", 2)).to.throw('Input tidak boleh bernilai string atau null');
    });
});
