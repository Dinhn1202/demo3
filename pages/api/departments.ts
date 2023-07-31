import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const departments = await prisma.departments.findMany();
		res.json(departments);
	} catch (error) {
		console.log("Failure");
	}
}