import { ChallengesRepository } from "../../src/app/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entities/Challenge";

export class InMemoryChallengeRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id === id);

    return challenge || null;
  }
}