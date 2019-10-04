export class Random {
  public static integer(max = 1000000000) {
    return Math.floor(Math.random() * max)
  }

  public static string(prefix = 'string') {
    return `${prefix}${Random.integer()}`
  }

  static date() {
    return new Date(Date.now() - Random.integer(10000000))
  }

  static boolean() {
    return Random.integer() < 500000000;
  }

  static number(min: number, max: number) {
    return min + (Math.random() * (max-min));
  }
}