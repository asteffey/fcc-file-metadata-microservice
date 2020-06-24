import request from 'supertest'
import app from './app'

describe('file analyse api', () => {
  it('returns info about a file', async () => {
    const { body } = await request(app)
      .post('/api/fileanalyse')
      .attach('upfile', `${__dirname}/__tests__/testfile`, { contentType: 'text/plain' })
    expect(body).toEqual({
      name: 'testfile',
      type: 'text/plain',
      size: 12
    })
  })
})
