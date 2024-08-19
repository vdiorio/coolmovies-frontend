import { Movie, MovieDirector } from "../../redux/types";

export class MovieViewModel {
  private id: string;
  private imgUrl: string;
  private title: string;
  private movieDirector: MovieDirector;
  private releaseDate: string;
  private ratings: { rating: number }[];

  constructor({
    id,
    imgUrl,
    title,
    releaseDate,
    movieReviewsByMovieId,
    movieDirectorByMovieDirectorId,
  }: Movie) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.movieDirector = movieDirectorByMovieDirectorId;
    this.releaseDate = releaseDate;
    this.ratings = movieReviewsByMovieId?.nodes || [];
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

  public getMovieDirectorId(): string {
    return this.movieDirector.id;
  }

  public getMovieDirectorName(): string {
    return this.movieDirector.name;
  }

  public getMovieDirectorAge(): number {
    return this.movieDirector.age;
  }

  public getReleaseDate(): string {
    return new Date(this.releaseDate).toLocaleDateString();
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
