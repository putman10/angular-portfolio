export class Project {
  constructor (
    public name: string,
    public description: string,
    public screenshots: string[],
    public githubLink: string,
    public projectLink: string,
    public category: string
  ) {}
}
