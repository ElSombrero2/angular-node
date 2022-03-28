const users = [
    {_id: 0, username: 'Test'},
    {_id: 1, username: 'Test 2'},
    {_id: 2, username: 'Test 3'}
]

module.exports = {
    login: (req, res) => res.json({token: 'TOKEN', ...req.body, key: process.env.KEY}),
    findAll: (req, res) => res.json(users)
}