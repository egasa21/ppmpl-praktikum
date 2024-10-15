const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API Testing', () => {
  it('should return all items', (done) => {
    request(app)
      .get('/api/items')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
        done();
      });
  });

  it('should create a new item', (done) => {
    const newItem = { name: 'Item 3' };
    request(app)
      .post('/api/items')
      .send(newItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', 'Item 3');
        done();
      });
  });

  // New test case: Update an item by id
  it('should update an item with new data', (done) => {
    const updatedData = { name: 'Updated Item' };
    
    // First, create a new item to be updated
    request(app)
      .post('/api/items')
      .send({ name: 'Item to Update' })
      .end((err, res) => {
        const itemId = res.body.id;
        
        // Update the created item
        request(app)
          .put(`/api/items/${itemId}`)
          .send(updatedData)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('id', itemId);
            expect(res.body).to.have.property('name', 'Updated Item');
            done();
          });
      });
  });

  // New test case: Delete an item by id
  it('should delete an item by id', (done) => {
    // First, create a new item to be deleted
    request(app)
      .post('/api/items')
      .send({ name: 'Item to Delete' })
      .end((err, res) => {
        const itemId = res.body.id;

        // Delete the created item
        request(app)
          .delete(`/api/items/${itemId}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message', 'Item deleted successfully');

            // Verify that the item was actually deleted
            request(app)
              .get(`/api/items/${itemId}`)
              .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
              });
          });
      });
  });
});
