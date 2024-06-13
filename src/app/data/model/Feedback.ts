export class Feedback {
    constructor(
        public emailAddress: string,
        public phoneNumber: string,
        public rateExperience: number,
        public feedbackTitle: string,
        public feedback: string
    )
    {}
}