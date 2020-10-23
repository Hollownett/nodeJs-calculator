export default {
  add: (req, res) => {
    try {
      const params = {
        firstNum: +req.query.firstNum,
        secondNum: +req.query.secondNum,
      }
      const answer = params.firstNum + params.secondNum
      if (!answer) return res.status(400).json({ success: false, error: 'Error' })
      return res.status(200).json({ saccess: true, answer: answer })
    } catch (e) {
      return res.status(500).json({ success: false, error: e })
    }
  },
  minus: (req, res) => {
    try {
      const params = {
        firstNum: req.query.firstNum,
        secondNum: req.query.secondNum,
      }
      const answer = params.firstNum - params.secondNum
      if (!answer) return res.status(400).json({ success: false, error: 'Error' })
      return res.status(200).json({ saccess: true, answer: answer })
    } catch (e) {
      return res.status(500).json({ success: false, error: e })
    }
  },
  division: (req, res) => {
    try {
      const params = {
        firstNum: req.query.firstNum,
        secondNum: req.query.secondNum,
      }
      const answer = params.firstNum / params.secondNum
      if (params.secondNum === '0') return res.status(400).json({ success: false, error: 'Can`t divide by zero' })
      else  if (!answer) return res.status(400).json({ success: false, error: 'Error' })
      return res.status(200).json({ saccess: true, answer: answer })
    } catch (e) {
      return res.status(500).json({ success: false, error: e })
    }
  },
  multiplication: (req, res) => {
    try {
      const params = {
        firstNum: req.query.firstNum,
        secondNum: req.query.secondNum,
      }
      const answer = params.firstNum * params.secondNum
      if (!answer) return res.status(400).json({ success: false, error: 'Error' })
      return res.status(200).json({ saccess: true, answer: answer })
    } catch (e) {
      return res.status(500).json({ success: false, error: e })
    }
  },
}
