import { ApiProperty } from '@nestjs/swagger';

export enum IminkType {
  NSO = 1,
  APP = 2,
}

export class IminkRequest {
  @ApiProperty({ enum: IminkType, default: IminkType.NSO })
  method: IminkType;

  @ApiProperty({
    default:
      'eyJraWQiOiIxZDkwOWFhNC1lZDExLTQzZWUtODEyZS00NzZhNzQ1YTY5YmUiLCJqa3UiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbS8xLjAuMC9jZXJ0aWZpY2F0ZXMiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1YWU4ZjdhNzhiMGNjYTRkIiwiZXhwIjoxNjY1MzE1Nzg5LCJqdGkiOiJjNDMwNjQ0NS04NDBhLTQ4ZTEtYjYyZS0zYWVmYWRkOTZiNmEiLCJhYzpzY3AiOlswLDgsOSwxNywyM10sImF1ZCI6IjcxYjk2M2MxYjdiNmQxMTkiLCJhYzpncnQiOjY0LCJpc3MiOiJodHRwczovL2FjY291bnRzLm5pbnRlbmRvLmNvbSIsImlhdCI6MTY2NTMxNDg4OSwidHlwIjoidG9rZW4ifQ.bf0hGoTZE8WN962BoUBh2xyY4SQq4GGdvuYsB1C_gu5RmleCRumK5XkCqNPcR1m17Zlh68oUqJx4xaRLSWNvPmjR1m76oo37N2TkV9U5ObssC-iI-FkIIkfrxlXK0nayqcxwcHLG4kHUO1QFsLuC6st2dPHt7d4yP8r88g8n1Jx27KMeB4u_JvIr3AXFPtgW0-VA4gEn_phYz7Vi4InA61bBVryhXqQIIi_-3rKapQVPgknKMYpLG9Eig8q6meILFQyOP9moy8UYZmnIpRSCgp8BM2Ze3kia3Rt66fTp2dmAukFmWbjku-kf4BK1eb8fxPoBffv6LHXkZFfgi7JO1Q',
  })
  naIdToken: string;
}

export class IminkResponse {
  @ApiProperty()
  f: string;

  @ApiProperty()
  request_id: string;

  @ApiProperty()
  timestamp: number;
}
