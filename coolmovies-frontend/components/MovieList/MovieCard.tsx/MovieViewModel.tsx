import { Movie } from "../../../redux/types";

export class MovieViewModel {
  private id: string;
  private imgUrl: string;
  private title: string;
  private movieDirectorId: number;
  private releaseDate: string;
  private ratings: { rating: number }[];

  constructor({
    id,
    imgUrl,
    title,
    movieDirectorId,
    releaseDate,
    movieReviewsByMovieId,
  }: Movie) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.movieDirectorId = movieDirectorId;
    this.releaseDate = releaseDate;
    this.ratings = movieReviewsByMovieId.nodes;
  }

  public getId(): string {
    return this.id;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }

  public getTitle(): string {
    return this.title;
  }

  public getMovieDirectorId(): number {
    return this.movieDirectorId;
  }

  public getReleaseDate(): string {
    return this.releaseDate;
  }

  public getRating(): number {
    const avgRating = parseFloat(
      (
        this.ratings.reduce((acc, { rating }) => acc + rating, 0) /
        this.ratings.length
      ).toFixed(1)
    );
    return avgRating;
  }
}
