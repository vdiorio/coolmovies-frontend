import { Review } from "../../redux/types";

export class ReviewViewModel {
  private id: string;
  private title: string;
  private body: string;
  private rating: number;
  private reviewAuthor: { id: string; name: string };

  constructor({ id, title, body, rating, userByUserReviewerId }: Review) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.rating = rating;
    this.reviewAuthor = userByUserReviewerId;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getBody(): string {
    return this.body;
  }

  public getRating(): number {
    return this.rating;
  }

  public getReviewAuthorName(): string {
    return this.reviewAuthor.name;
  }

  public getReviewAuthorId(): string {
    return this.reviewAuthor.id;
  }
}
