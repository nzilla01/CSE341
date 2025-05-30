const LendingRecord = require('../scheme/lendingRecord');

// POST /lending-records
exports.createRecord = async (req, res) => {
  try {
    const record = new LendingRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /lending-records/:recordId
exports.updateRecord = async (req, res) => {
  try {
    const updated = await LendingRecord.findByIdAndUpdate(req.params.recordId, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Record not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /lending-records/findByMember/:memberId
exports.findByMember = async (req, res) => {
  try {
    const records = await LendingRecord.find({ member: req.params.memberId }).populate('book');
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /lending-records/findByBook/:bookId
exports.findByBook = async (req, res) => {
  try {
    const records = await LendingRecord.find({ book: req.params.bookId }).populate('member');
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /lending-records/:recordId
exports.getRecordById = async (req, res) => {
  try {
    const record = await LendingRecord.findById(req.params.recordId).populate('book member');
    if (!record) return res.status(404).json({ error: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /lending-records/:recordId
exports.deleteRecord = async (req, res) => {
  try {
    const result = await LendingRecord.findByIdAndDelete(req.params.recordId);
    if (!result) return res.status(404).json({ error: "Record not found" });
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
