import { InMemoryChallengeRepository } from "../../../tests/repositories/inMemoryChallengesRepository";
import { InMemoryStudentRepository } from "../../../tests/repositories/inMemoryStudentsRepository";
import { Challenge } from "../../domain/entities/Challenge";
import { Student } from "../../domain/entities/Student";
import { CreateChallengeSubmission } from "./createChallengeSubmission"

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentRepository();
    const challengesRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: 'Leandro',
      email: 'leandro@example.com'
    });

    const challenge = Challenge.create({
      title: 'Challange 01',
      instructionUrl: 'http://example.com'
    })

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id
    });

    expect(response).toBeTruthy();
  })
})