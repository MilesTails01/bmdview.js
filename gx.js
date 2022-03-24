(function (exports)
{

	var gx = exports.gx = {};

	gx.PrimitiveType = {
		/*!< Draws a series of triangles. Each triangle (besides the first) shares a side with the previous triangle.
	 * Each vertex (besides the first two) completes a triangle. */
		TRIANGLESTRIP: 0x98,

		/*!< Draws a single triangle fan. The first vertex is the "centerpoint". The second and third vertex complete
		* the first triangle. Each subsequent vertex completes another triangle which shares a side with the previous
		* triangle (except the first triangle) and has the centerpoint vertex as one of the vertices. */
		TRIANGLEFAN: 0xA0,
	};

	gx.VertexAttribute = {
		PTMTXIDX: 0,
		TEX0MTXIDX: 1,
		TEX1MTXIDX: 2,
		TEX2MTXIDX: 3,
		TEX3MTXIDX: 4,
		TEX4MTXIDX: 5,
		TEX5MTXIDX: 6,
		TEX6MTXIDX: 7,
		TEX7MTXIDX: 8,
		POS: 9,
		NRM: 10,
		CLR0: 11,
		CLR1: 12,
		TEX0: 13,
		TEX1: 14,
		TEX2: 15,
		TEX3: 16,
		TEX4: 17,
		TEX5: 18,
		TEX6: 19,
		TEX7: 20,
	};

	gx.CompCnt = {
		POS_XY: 0,
		POS_XYZ: 1,
		CLR_RGB: 0,
		CLR_RGBA: 1,
		TEX_S: 0,
		TEX_ST: 1
	};

	gx.CompType = {
		U8: 0,
		S8: 1,
		U16: 2,
		S16: 3,
		F32: 4,
		RGBA8: 5,
	};

	gx.CompareType = {
		NEVER: 0,
		LESS: 1,
		EQUAL: 2,
		LEQUAL: 3,
		GREATER: 4,
		NEQUAL: 5,
		GEQUAL: 6,
		ALWAYS: 7,
	};

	gx.AlphaOp = {
		AND: 0,
		OR: 1,
		XOR: 2,
		XNOR: 3,
	};

	gx.CullMode = {
		NONE: 0, /*!< Do not cull any primitives. */
		FRONT: 1, /*!< Cull front-facing primitives. */
		BACK: 2, /*!< Cull back-facing primitives. */
		ALL: 3, /*!< Cull all primitives. */
	};

	gx.BlendMode = {
		ZERO: 0, /*!< 0.0 */
		ONE: 1, /*!< 1.0 */
		SRCCLR: 2, /*!< source color */
		INVSRCCLR: 3, /*!< 1.0 - (source color) */
		SRCALPHA: 4, /*!< source alpha */
		INVSRCALPHA: 5, /*!< 1.0 - (source alpha) */
		DSTALPHA: 6, /*!< framebuffer alpha */
		INVDSTALPHA: 7, /*!< 1.0 - (FB alpha) */
	};

	gx.TevOp = {
		ADD: 0,
		SUB: 1,
		COMP_R8_GT: 8,
		COMP_R8_EQ: 9,
		COMP_GR16_GT: 10,
		COMP_GR16_EQ: 11,
		COMP_BGR24_GT: 12,
		COMP_BGR24_EQ: 13,
		COMP_RGB8_GT: 14,
		COMP_RGB8_EQ: 15,
	};

	gx.TevBias = {
		ZERO: 0,
		ADDHALF: 1,
		SUBHALF: 2,
	};

	gx.TevScale = {
		SCALE_1: 0,
		SCALE_2: 1,
		SCALE_4: 2,
		DIVIDE_2: 3,
	};

	gx.CombineColorInput = {
		CPREV: 0, /*!< Use the color value from previous TEV stage */
		APREV: 1, /*!< Use the alpha value from previous TEV stage */
		C0: 2, /*!< Use the color value from the color/output register 0 */
		A0: 3, /*!< Use the alpha value from the color/output register 0 */
		C1: 4, /*!< Use the color value from the color/output register 1 */
		A1: 5, /*!< Use the alpha value from the color/output register 1 */
		C2: 6, /*!< Use the color value from the color/output register 2 */
		A2: 7, /*!< Use the alpha value from the color/output register 2 */
		TEXC: 8, /*!< Use the color value from texture */
		TEXA: 9, /*!< Use the alpha value from texture */
		RASC: 10, /*!< Use the color value from rasterizer */
		RASA: 11, /*!< Use the alpha value from rasterizer */
		ONE: 12,
		HALF: 13,
		KONST: 14,
		ZERO: 15, /*!< Use to pass zero value */
	};

	gx.CombineAlphaInput = {
		APREV: 0, /*!< Use the alpha value from previous TEV stage */
		A0: 1, /*!< Use the alpha value from the color/output register 0 */
		A1: 2, /*!< Use the alpha value from the color/output register 1 */
		A2: 3, /*!< Use the alpha value from the color/output register 2 */
		TEXA: 4, /*!< Use the alpha value from texture */
		RASA: 5, /*!< Use the alpha value from rasterizer */
		KONST: 6,
		ZERO: 7, /*!< Use to pass zero value */
	};

	gx.KonstColorSel = {
		KCSEL_1: 0x00, /*!< constant 1.0 */
		KCSEL_7_8: 0x01, /*!< constant 7/8 */
		KCSEL_3_4: 0x02, /*!< constant 3/4 */
		KCSEL_5_8: 0x03, /*!< constant 5/8 */
		KCSEL_1_2: 0x04, /*!< constant 1/2 */
		KCSEL_3_8: 0x05, /*!< constant 3/8 */
		KCSEL_1_4: 0x06, /*!< constant 1/4 */
		KCSEL_1_8: 0x07, /*!< constant 1/8 */
		KCSEL_K0: 0x0C, /*!< K0[RGB] register */
		KCSEL_K1: 0x0D, /*!< K1[RGB] register */
		KCSEL_K2: 0x0E, /*!< K2[RGB] register */
		KCSEL_K3: 0x0F, /*!< K3[RGB] register */
		KCSEL_K0_R: 0x10, /*!< K0[RRR] register */
		KCSEL_K1_R: 0x11, /*!< K1[RRR] register */
		KCSEL_K2_R: 0x12, /*!< K2[RRR] register */
		KCSEL_K3_R: 0x13, /*!< K3[RRR] register */
		KCSEL_K0_G: 0x14, /*!< K0[GGG] register */
		KCSEL_K1_G: 0x15, /*!< K1[GGG] register */
		KCSEL_K2_G: 0x16, /*!< K2[GGG] register */
		KCSEL_K3_G: 0x17, /*!< K3[GGG] register */
		KCSEL_K0_B: 0x18, /*!< K0[BBB] register */
		KCSEL_K1_B: 0x19, /*!< K1[BBB] register */
		KCSEL_K2_B: 0x1A, /*!< K2[BBB] register */
		KCSEL_K3_B: 0x1B, /*!< K3[RBB] register */
		KCSEL_K0_A: 0x1C, /*!< K0[AAA] register */
		KCSEL_K1_A: 0x1D, /*!< K1[AAA] register */
		KCSEL_K2_A: 0x1E, /*!< K2[AAA] register */
		KCSEL_K3_A: 0x1F, /*!< K3[AAA] register */
	};

	gx.KonstAlphaSel = {
		KASEL_1: 0x00, /*!< constant 1.0 */
		KASEL_7_8: 0x01, /*!< constant 7/8 */
		KASEL_3_4: 0x02, /*!< constant 3/4 */
		KASEL_5_8: 0x03, /*!< constant 5/8 */
		KASEL_1_2: 0x04, /*!< constant 1/2 */
		KASEL_3_8: 0x05, /*!< constant 3/8 */
		KASEL_1_4: 0x06, /*!< constant 1/4 */
		KASEL_1_8: 0x07, /*!< constant 1/8 */
		KASEL_K0_R: 0x10, /*!< K0[R] register */
		KASEL_K1_R: 0x11, /*!< K1[R] register */
		KASEL_K2_R: 0x12, /*!< K2[R] register */
		KASEL_K3_R: 0x13, /*!< K3[R] register */
		KASEL_K0_G: 0x14, /*!< K0[G] register */
		KASEL_K1_G: 0x15, /*!< K1[G] register */
		KASEL_K2_G: 0x16, /*!< K2[G] register */
		KASEL_K3_G: 0x17, /*!< K3[G] register */
		KASEL_K0_B: 0x18, /*!< K0[B] register */
		KASEL_K1_B: 0x19, /*!< K1[B] register */
		KASEL_K2_B: 0x1A, /*!< K2[B] register */
		KASEL_K3_B: 0x1B, /*!< K3[B] register */
		KASEL_K0_A: 0x1C, /*!< K0[A] register */
		KASEL_K1_A: 0x1D, /*!< K1[A] register */
		KASEL_K2_A: 0x1E, /*!< K2[A] register */
		KASEL_K3_A: 0x1F, /*!< K3[A] register */
	};

	gx.TexFormat = {
		I4: 0x0,
		I8: 0x1,
		IA4: 0x2,
		IA8: 0x3,
		RGB565: 0x4,
		RGB5A3: 0x5,
		RGBA8: 0x6,
		CI4: 0x8,
		CI8: 0x9,
		CI14: 0xa,
		CMPR: 0xE, /*!< Compressed */
	};

	gx.TexPalette = {
		IA8: 0x00,
		RGB565: 0x01,
		RGB5A3: 0x02,
	};

	gx.TexFilter = {
		NEAR: 0, /*!< Point sampling, no mipmap */
		LINEAR: 1, /*!< Bilinear filtering, no mipmap */
		NEAR_MIP_NEAR: 2, /*!< Point sampling, discrete mipmap */
		LIN_MIP_NEAR: 3, /*!< Bilinear filtering, discrete mipmap */
		NEAR_MIP_LIN: 4, /*!< Point sampling, linear mipmap */
		LIN_MIP_LIN: 5, /*!< Trilinear filtering */
	};

	gx.WrapMode = {
		CLAMP: 0,
		REPEAT: 1,
		MIRROR: 2,
	};

	gx.ColorSrc = {
		REG: 0,
		VTX: 1,
	};

	gx.TexGenSrc = {
		POS: 0,
		NRM: 1,
		BINRM: 2,
		TANGENT: 3,
		TEX0: 4,
		TEX1: 5,
		TEX2: 6,
		TEX3: 7,
		TEX4: 8,
		TEX5: 9,
		TEX6: 10,
		TEX7: 11,
	};

	gx.TexGenType = {
		MTX3x4: 0,
		MTX2x4: 1,
		BUMP0: 2,
		BUMP1: 3,
		BUMP2: 4,
		BUMP3: 5,
		BUMP4: 6,
		BUMP5: 7,
		BUMP6: 8,
		BUMP7: 9,
		SRTG: 10,
	};

	gx.TexGenMatrix = {
		IDENTITY: 60,
		TEXMTX0: 30,
		TEXMTX1: 33,
		TEXMTX2: 36,
		TEXMTX3: 39,
		TEXMTX4: 42,
		TEXMTX5: 45,
		TEXMTX6: 48,
		TEXMTX7: 51,
		TEXMTX8: 54,
		TEXMTX9: 57,
	};

})(window);
