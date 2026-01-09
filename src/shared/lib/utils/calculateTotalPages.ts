export function calculateTotalPages(
  questionsCount: number,
  limit: number = 10,
) {
  return Math.ceil(questionsCount / limit);
}
