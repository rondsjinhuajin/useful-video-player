# User Assessment & Quiz Feature Terminology / 用户考核答题功能术语对照

## Core Terms / 核心术语

### Assessment / 考核
- **User Assessment** / 用户考核
- **Assessment Feature** / 考核功能
- **Assessment System** / 考核系统
- **Assessment Management** / 考核管理

### Quiz / 答题
- **Quiz Feature** / 答题功能
- **Question Answering** / 答题
- **Answer Questions** / 回答问题
- **Quiz System** / 答题系统

### Combined Terms / 组合术语
- **User Assessment Quiz Feature** / 用户考核答题功能
- **User Assessment Question Answering Feature** / 用户考核答题功能
- **Assessment & Quiz Feature** / 考核答题功能
- **User Quiz Assessment Feature** / 用户答题考核功能

## Feature Components / 功能组件

### Assessment Types / 考核类型
- **Training Assessment** / 培训考核
- **Pre-Departure Assessment** / 出境前培训考核
- **Psychology Assessment** / 心理评估
- **Health Assessment** / 健康评估
- **Risk Assessment** / 风险评估

### Question Types / 题目类型
- **Multiple Choice Question** / 单选题
- **Multiple Select Question** / 多选题
- **True/False Question** / 判断题
- **Fill-in-the-Blank Question** / 填空题
- **Essay Question** / 问答题

### Assessment Flow / 考核流程
- **Assessment List** / 考核列表
- **Assessment Detail** / 考核详情
- **Start Assessment** / 开始考核
- **Answer Questions** / 答题
- **Submit Answer** / 提交答案
- **Submit Assessment** / 提交考核
- **Assessment Result** / 考核结果
- **Assessment Score** / 考核分数

### Assessment Status / 考核状态
- **Not Started** / 未开始
- **In Progress** / 进行中
- **Completed** / 已完成
- **Passed** / 通过
- **Failed** / 未通过

### Assessment Properties / 考核属性
- **Assessment ID** / 考核ID
- **Assessment Name** / 考核名称
- **Question Count** / 题目数量
- **Duration** / 考试时长
- **Full Score** / 满分
- **Passing Score** / 及格分数
- **Exam Time** / 考试时间
- **Exam Start Time** / 考试开始时间

## API Endpoints / API接口

### Assessment APIs / 考核接口
- `getAssessmentList` / 获取考核列表
- `getAssessmentDetail` / 获取考核详情
- `getQuestions` / 获取题目
- `submitAnswer` / 提交答案
- `submitAssessment` / 提交考核
- `getAssessmentResult` / 获取考核结果

### Function Names / 函数命名
- `getAssessmentList()` / 获取考核列表
- `getAssessmentDetail(id)` / 获取考核详情
- `getQuestions(assessmentId)` / 获取题目
- `submitAnswer(assessmentId, questionId, answer)` / 提交答案
- `submitAssessment({ examPlanId, answers })` / 提交考核
- `getAssessmentResult(assessmentId)` / 获取考核结果

## UI Components / UI组件

### Pages / 页面
- **Assessment List Page** / 考核列表页面
- **Assessment Detail Page** / 考核详情页面
- **Quiz Page** / 答题页面
- **Assessment Result Page** / 考核结果页面

### Components / 组件
- **AssessmentCard** / 考核卡片
- **QuestionCard** / 题目卡片
- **AnswerOption** / 答案选项
- **AnswerInput** / 答案输入框
- **Timer** / 倒计时器
- **ScoreDisplay** / 分数显示
- **ResultSummary** / 结果摘要

### Actions / 操作
- **Start Assessment** / 开始考核
- **Answer Question** / 答题
- **Next Question** / 下一题
- **Previous Question** / 上一题
- **Submit Answer** / 提交答案
- **Submit Assessment** / 提交考核
- **View Result** / 查看结果
- **Retake Assessment** / 重新考核

## Data Models / 数据模型

### Assessment Model / 考核模型
```typescript
interface Assessment {
  id: string                    // 考核ID
  name: string                  // 考核名称
  duration: number              // 考试时长（分钟）
  questionCount: number         // 题目数量
  fullScore: number             // 满分
  passingScore: number          // 及格分数
  examTimeDisplay: string       // 考试时间显示
  examStartTime?: string        // 考试开始时间
  status: 'notStarted' | 'inProgress' | 'completed' | 'passed' | 'failed'
}
```

### Question Model / 题目模型
```typescript
interface Question {
  id: string                    // 题目ID
  type: 'single' | 'multiple' | 'trueFalse' | 'fillBlank' | 'essay'
  content: string               // 题目内容
  options?: string[]            // 选项（选择题）
  correctAnswer: string | string[]  // 正确答案
  score: number                 // 分值
}
```

### Answer Model / 答案模型
```typescript
interface Answer {
  questionId: string            // 题目ID
  answer: string | string[]     // 答案
  isCorrect?: boolean           // 是否正确
  score?: number                // 得分
}
```

### Assessment Result Model / 考核结果模型
```typescript
interface AssessmentResult {
  assessmentId: string          // 考核ID
  totalScore: number            // 总分
  fullScore: number             // 满分
  passingScore: number          // 及格分数
  isPassed: boolean             // 是否通过
  answers: Answer[]             // 答案列表
  completedAt: string           // 完成时间
}
```

## Common Phrases / 常用短语

- **Take an assessment** / 参加考核
- **Complete an assessment** / 完成考核
- **Pass an assessment** / 通过考核
- **Fail an assessment** / 未通过考核
- **Answer questions** / 回答问题
- **Submit answers** / 提交答案
- **View results** / 查看结果
- **Assessment deadline** / 考核截止时间
- **Time remaining** / 剩余时间
- **Assessment progress** / 考核进度

## Recommended English Naming / 推荐的英文命名

### Feature Name / 功能名称
- **User Assessment Feature** ✅ (Recommended / 推荐)
- **Assessment & Quiz Feature** ✅
- **User Quiz Feature** ✅
- **Assessment System** ✅

### Component Names / 组件命名
- `UserAssessmentFeature`
- `AssessmentQuizComponent`
- `QuizAnswerComponent`
- `AssessmentResultComponent`

### File Names / 文件命名
- `assessment-feature.tsx`
- `quiz-component.tsx`
- `assessment-result.tsx`
- `user-assessment.tsx`

---

## Summary / 总结

**用户考核答题功能** 的最佳英文翻译：
- **User Assessment Quiz Feature** ✅ (Most common / 最常用)
- **User Assessment Question Answering Feature** ✅ (More descriptive / 更详细)
- **Assessment & Quiz Feature** ✅ (Simpler / 更简洁)
