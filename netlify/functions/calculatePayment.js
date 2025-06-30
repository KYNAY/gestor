import prisma from '../../utils/db';

export async function handler(event) {
  const { managerId, investment, revenue } = JSON.parse(event.body);
  const profit = revenue - investment;
  return {
    statusCode: 200,
    body: JSON.stringify({ profit })
  };
}
