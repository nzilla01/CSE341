const Admin = require('../scheme/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  try {
    const { password, ...data } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ ...data, password: hashed });
    await admin.save();
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { userName, password } = req.body;
  const admin = await Admin.findOne({ userName });
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: admin._id }, 'secretkey', { expiresIn: '1d' });
  res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};

// GET /admins/:adminId
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.adminId);
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /admins/:adminId
exports.updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.adminId, req.body, { new: true });
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /admins/:adminId
exports.deleteAdmin = async (req, res) => {
  try {
    const result = await Admin.findByIdAndDelete(req.params.adminId);
    if (!result) return res.status(404).json({ error: "Admin not found" });
    res.json({ message: "Admin deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
