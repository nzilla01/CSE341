const Member = require('../scheme/member');

// POST /members
exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /members/:memberId
exports.updateMember = async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(req.params.memberId, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Member not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /members/findByStatus?status=active
exports.findByStatus = async (req, res) => {
  try {
    const members = await Member.find({ status: req.query.status });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /members/:memberId
exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.memberId);
    if (!member) return res.status(404).json({ error: "Member not found" });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /members/:memberId
exports.deleteMember = async (req, res) => {
  try {
    const result = await Member.findByIdAndDelete(req.params.memberId);
    if (!result) return res.status(404).json({ error: "Member not found" });
    res.json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
