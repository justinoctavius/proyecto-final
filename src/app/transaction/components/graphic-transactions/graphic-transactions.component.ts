import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';
import { GraphicItem } from '../../interfaces/graphic.interface';
import { GraphicService } from '../../services/graphic.service';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-graphic-transactions',
  templateUrl: './graphic-transactions.component.html',
})
export class GraphicTransactionsComponent implements OnChanges {
  @Input() transactions: Transaction[] = [];

  single: GraphicItem[] = [];
  colorsDomain: string[] = [];
  view: [number, number] = [this.getViewWidth(), this.getViewWidth() / 1.5];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    domain: this.graphicService.colors,
    name: 'colors',
    selectable: false,
    group: ScaleType.Ordinal,
  };

  constructor(private graphicService: GraphicService) {
    Object.assign(this, { single: this.single });
  }

  getViewWidth() {
    const width = window.innerWidth;
    const MAX_WIDTH = 672;
    const PADDING = 32;
    if (width > MAX_WIDTH) {
      return MAX_WIDTH - PADDING;
    }
    return width - PADDING;
  }

  async ngOnChanges() {
    await this.graphicService.getGraphicItems(this.transactions);
    this.single = this.graphicService.graphicItems;
  }
}
